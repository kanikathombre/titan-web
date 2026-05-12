export function AdminHeader() {

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-border bg-background px-8">

      <div>

        <h1 className="text-3xl font-black">

          Admin Dashboard

        </h1>

      </div>

      <div className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg">

        ADMIN

      </div>

    </header>
  );
}