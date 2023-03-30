import Link from 'next/link';

const ThePrimaryFooter = () => {
  return (
    <footer className="max-w-7xl py-4 mx-auto border-t border-t-blue-500">
      <p className="text-blue-200">
        Copyright &copy; {new Date().getFullYear()}.{' '}
        <Link href="/" className="underline">
          My Cosmetics
        </Link>
      </p>
    </footer>
  );
};

export default ThePrimaryFooter;
