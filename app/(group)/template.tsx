import Header from "@/components/group/header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      {children}
    </>
  );
}
