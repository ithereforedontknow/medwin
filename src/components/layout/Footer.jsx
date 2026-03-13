export function Footer() {
  return (
    <footer className="m-footer">
      <span className="m-footer-brand">Medwin Doctolero</span>
      <span className="m-footer-copy">
        © {new Date().getFullYear()} — All rights reserved
      </span>
    </footer>
  );
}
