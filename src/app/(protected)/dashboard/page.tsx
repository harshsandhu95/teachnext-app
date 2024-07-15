import CreateClass from "./_components/CreateClass";
import Credits from "./_components/Credits";

export default function Dashboard() {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <CreateClass />
        <Credits />
      </div>
    </section>
  );
}
