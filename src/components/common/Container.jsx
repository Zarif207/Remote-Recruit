/**
 * Container
 * Reusable max-width wrapper that centres content and applies
 * consistent horizontal padding across all breakpoints.
 *
 * @param {React.ReactNode} children
 * @param {string}          className  – optional extra Tailwind classes
 */
const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
