export default function MarketingPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        Marketing Page
      </h1>

      <p className="mt-4">
        API URL: {process.env.NEXT_PUBLIC_API_URL}
      </p>
    </div>
  );
}