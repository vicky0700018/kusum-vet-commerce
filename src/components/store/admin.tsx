import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode, type FormEvent } from "react";
import { useStore } from "./context";
import { Brand } from "./shell";
import { Button, Icon, Field, Empty } from "./ui";
import { money, statuses, demoLogin, type Product, type Category } from "@/data/mock";

const menu = [
  ["/admin/dashboard", "Dashboard", "box"],
  ["/admin/products", "Products", "box"],
  ["/admin/categories", "Categories", "leaf"],
  ["/admin/orders", "Orders", "cart"],
  ["/admin/customers", "Customers", "user"],
  ["/admin/content", "Content", "leaf"],
  ["/admin/settings", "Settings", "user"],
] as const;

function AdminShell({ title, action, children }: { title: string; action?: ReactNode; children: ReactNode }) {
  const { admin, setAdmin, notify } = useStore();
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!admin) navigate({ to: "/admin/login" });
  }, [admin, navigate]);
  if (!admin) return null;
  const logout = () => {
    setAdmin(false);
    notify("You have been logged out");
    navigate({ to: "/admin/login" });
  };
  const nav = (
    <>
      <div className="admin-label">Management</div>
      <nav className="admin-nav">
        {menu.map(([to, label, icon]) => (
          <Link key={to} to={to} className={path === to ? "active" : ""} onClick={() => setOpen(false)}>
            <Icon name={icon} size={16} />
            {label}
          </Link>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <Link to="/"><Icon name="arrow" size={16} />View Website</Link>
        <button type="button" onClick={logout}><Icon name="close" size={16} />Logout</button>
      </div>
    </>
  );
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand"><Brand /></div>
        {nav}
      </aside>
      <div className="admin-main">
        <header className="admin-topbar">
          <Button variant="ghost" className="icon-btn admin-toggle" aria-label="Open admin menu" onClick={() => setOpen(true)}>
            <Icon name="menu" />
          </Button>
          <strong>{title}</strong>
          <div className="admin-user"><span className="avatar">A</span><span>Demo Admin</span></div>
        </header>
        <main className="admin-body">
          <div className="admin-page-head">
            <div><h1>{title}</h1><p className="demo-note">Demo panel — changes are kept only for this visit.</p></div>
            {action}
          </div>
          {children}
        </main>
      </div>
      {open && (
        <div className="modal-backdrop admin-drawer-backdrop" onClick={() => setOpen(false)}>
          <aside className="admin-sidebar admin-drawer" onClick={(e) => e.stopPropagation()}>
            <Button variant="ghost" className="icon-btn modal-close" aria-label="Close menu" onClick={() => setOpen(false)}><Icon name="close" /></Button>
            {nav}
          </aside>
        </div>
      )}
    </div>
  );
}

export function AdminLogin() {
  const { setAdmin, notify } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!demoLogin(email.trim(), password)) return setError("Invalid email or password. Use the demo credentials below.");
    setAdmin(true);
    notify("Welcome back, Admin");
    navigate({ to: "/admin/dashboard" });
  };
  return (
    <main className="login-page">
      <form className="login-box" onSubmit={submit} noValidate>
        <Brand />
        <h1>Admin Login</h1>
        <p>Sign in to manage the store.</p>
        <Field label="Email"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" /></Field>
        <Field label="Password"><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" /></Field>
        {error && <p className="error-text" role="alert">{error}</p>}
        <Button type="submit" className="w-full">Sign in</Button>
        <div className="demo-credentials">
          <strong>Demo credentials</strong>
          <span>admin@kusumvetcare.com</span>
          <span>Admin@123</span>
        </div>
        <Link to="/" className="text-link">← Back to website</Link>
      </form>
    </main>
  );
}

const statusClass = (s: string) => `status ${s.toLowerCase()}`;

export function AdminDashboard() {
  const { products, orders, customers } = useStore();
  const revenue = orders.filter((o) => o.status !== "Cancelled").reduce((a, o) => a + o.total, 0);
  const stats = [
    ["Total Products", products.length],
    ["Total Orders", orders.length],
    ["Total Customers", customers.length],
    ["Total Revenue", money(revenue)],
    ["Low Stock Products", products.filter((p) => p.stock < 15).length],
    ["Pending Orders", orders.filter((o) => o.status === "Pending").length],
  ] as const;
  const top = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 5);
  return (
    <AdminShell title="Dashboard">
      <div className="dashboard-stats">
        {stats.map(([label, value]) => (
          <div key={label} className="stat-card">
            <div className="stat-top"><span>{label}</span><Icon name="box" size={16} /></div>
            <strong>{value}</strong>
            <p>Mock data</p>
          </div>
        ))}
      </div>
      <div className="admin-two-col">
        <section className="admin-panel">
          <h2>Sales overview</h2>
          <div className="chart">
            {["May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((m, i) => (
              <div key={m} className="chart-col"><div className={`bar bar-${i + 1}`} /><span>{m}</span></div>
            ))}
          </div>
        </section>
        <section className="admin-panel">
          <h2>Top-selling products</h2>
          {top.map((p) => (
            <div key={p.id} className="top-product">
              <img src={p.image} alt={p.name} />
              <div><strong>{p.name}</strong><span>{p.reviews} sold · {money(p.sale)}</span></div>
            </div>
          ))}
        </section>
      </div>
      <section className="admin-panel">
        <h2>Recent orders</h2>
        <OrdersTable limit={6} />
      </section>
    </AdminShell>
  );
}

function OrdersTable({ limit, query = "", status = "" }: { limit?: number; query?: string; status?: string }) {
  const { orders, setOrders, notify } = useStore();
  const rows = orders
    .filter((o) => (!status || o.status === status) && (o.id + o.customer).toLowerCase().includes(query.toLowerCase()))
    .slice(0, limit);
  if (!rows.length) return <Empty title="No orders found" text="Try a different search or status." />;
  return (
    <div className="table-scroll">
      <table>
        <thead><tr><th>Order ID</th><th>Customer</th><th>Date</th><th>Products</th><th>Amount</th><th>Payment</th><th>Status</th></tr></thead>
        <tbody>
          {rows.map((o) => (
            <tr key={o.id}>
              <td><strong>{o.id}</strong></td>
              <td>{o.customer}</td>
              <td>{o.date}</td>
              <td>{o.items.reduce((a, i) => a + i.quantity, 0)} items</td>
              <td>{money(o.total)}</td>
              <td>{o.payment}</td>
              <td>
                {limit ? (
                  <span className={statusClass(o.status)}>{o.status}</span>
                ) : (
                  <select aria-label={`Status for ${o.id}`} value={o.status} onChange={(e) => {
                    const v = e.target.value;
                    setOrders((all) => all.map((x) => (x.id === o.id ? { ...x, status: v } : x)));
                    notify(`${o.id} marked as ${v}`);
                  }}>
                    {statuses.map((s) => <option key={s}>{s}</option>)}
                  </select>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const emptyProduct = (category: string): Product => ({
  id: "", name: "", category, description: "", price: 0, sale: 0, stock: 0, sku: "", image: "", additionalImages: [],
  rating: 4.5, reviews: 0, featured: false, active: true, type: "Supplement", keywords: "", created: Date.now(),
});

export function AdminProducts() {
  const { products, setProducts, categories, notify } = useStore();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [editing, setEditing] = useState<Product | null>(null);
  const [error, setError] = useState("");
  const rows = products.filter((p) => (!cat || p.category === cat) && (p.name + p.sku).toLowerCase().includes(q.toLowerCase()));
  const update = (id: string, patch: Partial<Product>) => setProducts((all) => all.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  const save = (e: FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (!editing.name.trim() || editing.price <= 0 || editing.sale <= 0) return setError("Name, price and discount price are required.");
    if (editing.sale > editing.price) return setError("Discount price cannot be higher than price.");
    const p = { ...editing, image: editing.image || products[0]?.image || "", sku: editing.sku || `KVC-${Date.now() % 100000}` };
    if (p.id) setProducts((all) => all.map((x) => (x.id === p.id ? p : x)));
    else setProducts((all) => [{ ...p, id: String(Date.now()) }, ...all]);
    notify(p.id ? "Product updated" : "Product added");
    setEditing(null);
  };
  const set = (patch: Partial<Product>) => editing && setEditing({ ...editing, ...patch });
  return (
    <AdminShell title="Products" action={<Button onClick={() => { setError(""); setEditing(emptyProduct(categories[0]?.name ?? "")); }}>+ Add Product</Button>}>
      <div className="admin-toolbar">
        <div className="search-input"><Icon name="search" /><input aria-label="Search products" placeholder="Search by name or SKU" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <select aria-label="Filter by category" value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="">All categories</option>
          {categories.map((c) => <option key={c.id}>{c.name}</option>)}
        </select>
      </div>
      <section className="admin-panel">
        {rows.length === 0 ? <Empty title="No products found" text="Try a different search." /> : (
          <div className="table-scroll">
            <table>
              <thead><tr><th>Product</th><th>SKU</th><th>Price</th><th>Stock</th><th>Status</th><th>Featured</th><th>Actions</th></tr></thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id}>
                    <td><div className="table-product"><img src={p.image} alt={p.name} /><div><strong>{p.name}</strong><div>{p.category}</div></div></div></td>
                    <td>{p.sku}</td>
                    <td>{money(p.sale)} <s>{money(p.price)}</s></td>
                    <td><input type="number" min={0} aria-label={`Stock for ${p.name}`} value={p.stock} className="stock-input" onChange={(e) => update(p.id, { stock: Math.max(0, Number(e.target.value)) })} /></td>
                    <td><button type="button" className={`status ${p.active ? "" : "cancelled"}`} onClick={() => update(p.id, { active: !p.active })}>{p.active ? "Active" : "Inactive"}</button></td>
                    <td><label className="checkbox"><input type="checkbox" checked={p.featured} onChange={() => update(p.id, { featured: !p.featured })} />Featured</label></td>
                    <td><div className="row-actions">
                      <Button variant="outline" onClick={() => { setError(""); setEditing(p); }}>Edit</Button>
                      <Button variant="ghost" onClick={() => { if (confirm(`Delete ${p.name}?`)) { setProducts((all) => all.filter((x) => x.id !== p.id)); notify("Product deleted"); } }}>Delete</Button>
                    </div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      {editing && (
        <div className="modal-backdrop" onClick={() => setEditing(null)}>
          <form className="modal" role="dialog" aria-modal="true" aria-label="Product form" onClick={(e) => e.stopPropagation()} onSubmit={save}>
            <Button type="button" variant="ghost" className="icon-btn modal-close" aria-label="Close" onClick={() => setEditing(null)}><Icon name="close" /></Button>
            <h2>{editing.id ? "Edit product" : "Add product"}</h2>
            <div className="form-grid">
              <div className="full"><Field label="Product name"><input value={editing.name} onChange={(e) => set({ name: e.target.value })} /></Field></div>
              <Field label="Category"><select value={editing.category} onChange={(e) => set({ category: e.target.value })}>{categories.map((c) => <option key={c.id}>{c.name}</option>)}</select></Field>
              <Field label="SKU"><input value={editing.sku} onChange={(e) => set({ sku: e.target.value })} /></Field>
              <Field label="Price (₹)"><input type="number" value={editing.price || ""} onChange={(e) => set({ price: Number(e.target.value) })} /></Field>
              <Field label="Discount price (₹)"><input type="number" value={editing.sale || ""} onChange={(e) => set({ sale: Number(e.target.value) })} /></Field>
              <Field label="Stock"><input type="number" value={editing.stock} onChange={(e) => set({ stock: Number(e.target.value) })} /></Field>
              <Field label="Rating"><input type="number" step="0.1" min={0} max={5} value={editing.rating} onChange={(e) => set({ rating: Number(e.target.value) })} /></Field>
              <div className="full"><Field label="Product image">
                <select value={editing.image} onChange={(e) => set({ image: e.target.value })}>
                  <option value="">Choose an image</option>
                  {products.map((p, i) => <option key={p.id} value={p.image}>Image {i + 1} ({p.name})</option>)}
                </select>
              </Field></div>
              <div className="full"><Field label="Additional images">
                <select multiple value={editing.additionalImages} onChange={(e) => set({ additionalImages: Array.from(e.target.selectedOptions, (o) => o.value) })}>
                  {products.map((p, i) => <option key={p.id} value={p.image}>Image {i + 1}</option>)}
                </select>
              </Field></div>
              <div className="full"><Field label="Description"><textarea value={editing.description} onChange={(e) => set({ description: e.target.value })} /></Field></div>
              <label className="checkbox"><input type="checkbox" checked={editing.featured} onChange={(e) => set({ featured: e.target.checked })} />Featured product</label>
            </div>
            {error && <p className="error-text" role="alert">{error}</p>}
            <div className="row-actions mt-5"><Button type="submit">Save product</Button><Button type="button" variant="outline" onClick={() => setEditing(null)}>Cancel</Button></div>
          </form>
        </div>
      )}
    </AdminShell>
  );
}

export function AdminCategories() {
  const { categories, setCategories, products, notify } = useStore();
  const [editing, setEditing] = useState<Category | null>(null);
  const [error, setError] = useState("");
  const imgs = Array.from(new Set(categories.map((c) => c.image)));
  const save = (e: FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (!editing.name.trim()) return setError("Category name is required.");
    const c = { ...editing, image: editing.image || imgs[0] || "" };
    if (c.id) setCategories((all) => all.map((x) => (x.id === c.id ? c : x)));
    else setCategories((all) => [...all, { ...c, id: "category-" + Date.now() }]);
    notify(c.id ? "Category updated" : "Category added");
    setEditing(null);
  };
  return (
    <AdminShell title="Categories" action={<Button onClick={() => { setError(""); setEditing({ id: "", name: "", description: "", image: "", active: true }); }}>+ Add Category</Button>}>
      <div className="category-grid">
        {categories.map((c) => (
          <article key={c.id} className="category-card">
            <img src={c.image} alt={c.name} />
            <div className="category-body">
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <p className="demo-note">{products.filter((p) => p.category === c.name).length} products</p>
              <div className="row-actions">
                <button type="button" className={`status ${c.active ? "" : "cancelled"}`} onClick={() => setCategories((all) => all.map((x) => (x.id === c.id ? { ...x, active: !x.active } : x)))}>{c.active ? "Active" : "Inactive"}</button>
                <Button variant="outline" onClick={() => { setError(""); setEditing(c); }}>Edit</Button>
                <Button variant="ghost" onClick={() => { if (confirm(`Delete ${c.name}?`)) { setCategories((all) => all.filter((x) => x.id !== c.id)); notify("Category deleted"); } }}>Delete</Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {editing && (
        <div className="modal-backdrop" onClick={() => setEditing(null)}>
          <form className="modal" role="dialog" aria-modal="true" aria-label="Category form" onClick={(e) => e.stopPropagation()} onSubmit={save}>
            <Button type="button" variant="ghost" className="icon-btn modal-close" aria-label="Close" onClick={() => setEditing(null)}><Icon name="close" /></Button>
            <h2>{editing.id ? "Edit category" : "Add category"}</h2>
            <Field label="Name"><input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></Field>
            <Field label="Description"><textarea value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} /></Field>
            <Field label="Category image">
              <select value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })}>
                <option value="">Choose an image</option>
                {imgs.map((src, i) => <option key={src} value={src}>Image {i + 1}</option>)}
              </select>
            </Field>
            {editing.image && <img className="preview-image" src={editing.image} alt="Selected category" />}
            <label className="checkbox"><input type="checkbox" checked={editing.active} onChange={(e) => setEditing({ ...editing, active: e.target.checked })} />Active</label>
            {error && <p className="error-text" role="alert">{error}</p>}
            <div className="row-actions mt-5"><Button type="submit">Save category</Button><Button type="button" variant="outline" onClick={() => setEditing(null)}>Cancel</Button></div>
          </form>
        </div>
      )}
    </AdminShell>
  );
}

export function AdminOrders() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  return (
    <AdminShell title="Orders">
      <div className="admin-toolbar">
        <div className="search-input"><Icon name="search" /><input aria-label="Search orders" placeholder="Search by order ID or customer" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <select aria-label="Filter by status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All statuses</option>
          {statuses.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <section className="admin-panel"><OrdersTable query={q} status={status} /></section>
    </AdminShell>
  );
}

export function AdminCustomers() {
  const { customers } = useStore();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const rows = customers.filter((c) => (!status || c.status === status) && (c.name + c.phone + c.email).toLowerCase().includes(q.toLowerCase()));
  return (
    <AdminShell title="Customers">
      <div className="admin-toolbar">
        <div className="search-input"><Icon name="search" /><input aria-label="Search customers" placeholder="Search name, phone or email" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <select aria-label="Filter by status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All customers</option>
          {Array.from(new Set(customers.map((c) => c.status))).map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <section className="admin-panel">
        {rows.length === 0 ? <Empty title="No customers found" text="Try a different search." /> : (
          <div className="table-scroll">
            <table>
              <thead><tr><th>Customer</th><th>Phone</th><th>Email</th><th>Orders</th><th>Total spent</th><th>Status</th></tr></thead>
              <tbody>
                {rows.map((c) => (
                  <tr key={c.id}><td><strong>{c.name}</strong></td><td>{c.phone}</td><td>{c.email}</td><td>{c.orders}</td><td>{money(c.spent)}</td><td><span className={statusClass(c.status)}>{c.status}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </AdminShell>
  );
}

export function AdminContent() {
  const { settings, setSettings, products, setProducts, notify } = useStore();
  const [draft, setDraft] = useState(settings);
  const heroOptions = Array.from(new Set([settings.hero, ...products.slice(0, 6).map((p) => p.image)]));
  const save = (e: FormEvent) => {
    e.preventDefault();
    setSettings(draft);
    notify("Website content updated");
  };
  return (
    <AdminShell title="Content">
      <form className="admin-form" onSubmit={save}>
        <section className="admin-panel form-section">
          <h2>Hero section</h2>
          <Field label="Hero heading"><input value={draft.heading} onChange={(e) => setDraft({ ...draft, heading: e.target.value })} /></Field>
          <Field label="Hero description"><textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} /></Field>
          <Field label="Hero image">
            <select value={draft.hero} onChange={(e) => setDraft({ ...draft, hero: e.target.value })}>
              {heroOptions.map((src, i) => <option key={src} value={src}>{i === 0 ? "Farm banner" : `Image ${i}`}</option>)}
            </select>
          </Field>
          <img className="preview-image" src={draft.hero} alt="Hero preview" />
        </section>
        <section className="admin-panel form-section">
          <h2>Homepage sections & promotion</h2>
          <Field label="Promotional banner"><input value={draft.promo} onChange={(e) => setDraft({ ...draft, promo: e.target.value })} /></Field>
          <label className="checkbox"><input type="checkbox" checked={draft.showCategories} onChange={(e) => setDraft({ ...draft, showCategories: e.target.checked })} />Show “Shop by Category”</label>
          <label className="checkbox"><input type="checkbox" checked={draft.showFeatured} onChange={(e) => setDraft({ ...draft, showFeatured: e.target.checked })} />Show “Featured Products”</label>
        </section>
        <section className="admin-panel form-section">
          <h2>Featured products</h2>
          {products.slice(0, 12).map((p) => (
            <label key={p.id} className="checkbox"><input type="checkbox" checked={p.featured} onChange={() => setProducts((all) => all.map((x) => (x.id === p.id ? { ...x, featured: !x.featured } : x)))} />{p.name}</label>
          ))}
        </section>
        <section className="admin-panel form-section">
          <h2>About content</h2>
          <Field label="About introduction"><textarea value={draft.about} onChange={(e) => setDraft({ ...draft, about: e.target.value })} /></Field>
        </section>
        <Button type="submit">Save content</Button>
      </form>
    </AdminShell>
  );
}

export function AdminSettings() {
  const { settings, setSettings, notify } = useStore();
  const [d, setD] = useState(settings);
  const [error, setError] = useState("");
  const save = (e: FormEvent) => {
    e.preventDefault();
    if (!d.name.trim() || !d.phone.trim()) return setError("Business name and phone are required.");
    setError("");
    setSettings(d);
    notify("Settings saved");
  };
  const text = (label: string, key: "name" | "phone" | "address" | "email" | "title" | "heading" | "footer", full = false) => (
    <div className={full ? "full" : ""}><Field label={label}><input value={d[key]} onChange={(e) => setD({ ...d, [key]: e.target.value })} /></Field></div>
  );
  const num = (label: string, key: "delivery" | "tax" | "minimum") => (
    <Field label={label}><input type="number" min={0} value={d[key]} onChange={(e) => setD({ ...d, [key]: Number(e.target.value) })} /></Field>
  );
  return (
    <AdminShell title="Settings">
      <form className="admin-form" onSubmit={save}>
        <section className="admin-panel form-section"><h2>Business information</h2><div className="form-grid">{text("Business name", "name")}{text("Phone", "phone")}{text("Address", "address", true)}{text("Email (optional)", "email", true)}</div></section>
        <section className="admin-panel form-section"><h2>Website settings</h2><div className="form-grid">{text("Website title", "title", true)}{text("Hero heading", "heading", true)}{text("Footer text", "footer", true)}</div></section>
        <section className="admin-panel form-section"><h2>Store settings</h2><div className="form-grid">{num("Delivery charge (₹)", "delivery")}{num("Tax percentage (%)", "tax")}{num("Minimum order amount (₹)", "minimum")}</div></section>
        {error && <p className="error-text" role="alert">{error}</p>}
        <Button type="submit">Save settings</Button>
      </form>
    </AdminShell>
  );
}
