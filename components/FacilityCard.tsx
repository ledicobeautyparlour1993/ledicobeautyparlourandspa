import { ReactNode } from "react";

interface FacilityCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function FacilityCard({ title, description, icon }: FacilityCardProps) {
  return (
    <article className="card group h-full text-left">
      {icon && (
        <div className="mb-4 inline-flex rounded-xl bg-ledico-primary/10 p-3 text-ledico-primary group-hover:bg-ledico-primary group-hover:text-white">
          {icon}
        </div>
      )}
      <h3 className="heading-md text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </article>
  );
}
