import Image from "next/image";

export default function Avatar({
  name,
  avatar,
  size = 40,
}: {
  name: string;
  avatar?: string;
  size?: number;
}) {
  if (avatar) {
    return (
      <Image
        src={avatar}
        alt={name}
        width={size}
        height={size}
        className="rounded-full object-cover"
      />
    );
  }

  return (
    <div
      className="rounded-full bg-blue-600 text-white flex items-center justify-center font-bold"
      style={{ width: size, height: size }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
