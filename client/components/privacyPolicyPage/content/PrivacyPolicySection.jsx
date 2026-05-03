export default function PrivacyPolicySection({ title, children, isLast }) {
  return (
    <div
      className={`md:flex justify-between gap-6 px-4 py-10 md:py-12 ${!isLast && "border-b border-grey-100"}`}
    >
      <h4 className="text-blue-300 mb-6 md:mb-0 flex-3">{`// ${title}`}</h4>

      <div className="max-w-xl font-bold font-helixa flex-4">{children}</div>
    </div>
  );
}
