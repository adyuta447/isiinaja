import Link from 'next/link';

interface MenuProps {
    href: string;
    title: string;
}

export default function Menu(props: MenuProps) {
  const { href, title } = props;
  return (
    <Link href={href}>
      <li className="mb-6">
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </li>
    </Link>
  );
}
