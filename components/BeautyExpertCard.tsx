import Image from "next/image";

interface BeautyExpertCardProps {
  name: string;
  specialization: string;
  experience: string;
  image?: string;
}

function getAvatarUrl(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=160&background=E91E63&color=fff`;
}

export default function BeautyExpertCard({
  name,
  specialization,
  experience,
  image,
}: BeautyExpertCardProps) {
  const imgSrc = image || getAvatarUrl(name);
  return (
    <article className="card overflow-hidden text-center">
      <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full bg-gray-200">
        <Image
          src={imgSrc}
          alt={name}
          width={160}
          height={160}
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{name}</h3>
      <p className="text-ledico-primary">{specialization}</p>
      <p className="mt-1 text-sm text-gray-600">{experience}</p>
    </article>
  );
}
