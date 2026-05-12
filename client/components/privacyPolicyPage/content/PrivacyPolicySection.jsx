export default function PrivacyPolicySection({ title, children }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-[26px] not-last:border-b border-grey-100 py-10 md:py-16">
      <h4 className="!leading-[120%] !tracking-[-5%] !text-[24px] font-bold text-blue-300">{`// ${title}`}</h4>

      <div className="md:w-[360px] lg:w-[719px] font-helixa font-bold">
        {children}
      </div>
    </div>
  );
}
