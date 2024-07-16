import CreateClass from "./_components/CreateClass";
import Credits from "./_components/Credits";
import TotalStudents from "./_components/TotalStudents";

export default function Dashboard() {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <CreateClass />
        <Credits />
        <TotalStudents />
      </div>
    </section>
  );
}
