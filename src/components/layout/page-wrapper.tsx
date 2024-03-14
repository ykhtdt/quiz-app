export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      {children}
    </div>
  );
}
