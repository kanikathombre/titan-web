const auditLogs: any[] = [];

export default function AuditPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Audit Trail</h1>
        <p className="text-muted-foreground mt-1">
          Track all admin-only system activities.
        </p>
      </div>

      {/* Table Card */}
      <div className="rounded-2xl border bg-background p-4 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3 px-4 font-medium">Timestamp</th>
                <th className="py-3 px-4 font-medium">Actor</th>
                <th className="py-3 px-4 font-medium">Action</th>
                <th className="py-3 px-4 font-medium">Target</th>
                <th className="py-3 px-4 font-medium">Result</th>
              </tr>
            </thead>

            <tbody>
              {auditLogs.length > 0 ? (
                auditLogs.map((log: any) => (
                  <tr
                    key={log.id}
                    className="border-b hover:bg-muted/50 transition"
                  >
                    <td className="py-3 px-4">{log.timestamp}</td>
                    <td className="py-3 px-4">{log.actor}</td>
                    <td className="py-3 px-4">{log.action}</td>
                    <td className="py-3 px-4">{log.target}</td>

                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          log.result === "Success"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {log.result}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-10 text-muted-foreground"
                  >
                    No audit logs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}