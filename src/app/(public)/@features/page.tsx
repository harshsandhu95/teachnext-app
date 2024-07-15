import {
  BadgeCentIcon,
  FileTextIcon,
  ListTodoIcon,
  NotebookPenIcon,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      name: "Monthly Student Reports",
      description:
        "Get monthly reports of your students in a single click. No more manual work.",
      icon: FileTextIcon,
    },
    {
      name: "AI Question Paper Generator",
      description:
        "Generate question papers for your students in a few clicks. Save time and effort.",
      icon: NotebookPenIcon,
    },
    {
      name: "To do list",
      description:
        "A simple to-do list that helps you keep track of your tasks. Get notified when a task is due.",
      icon: ListTodoIcon,
    },
    {
      name: "Free 500 credits for new users",
      description:
        "Get 500 credits for free when you sign up. Use them to generate question papers or get student reports.",
      icon: BadgeCentIcon,
    },
  ];

  return (
    <section id="features" className="container py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Your everyday tasks made easier.
          </p>
          <p className="mt-6 text-lg leading-8">
            A teaching assistant that helps you in your everyday tasks. From
            generating question papers to managing your to-do list, we&apos;ve
            got you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <feature.icon aria-hidden="true" size={24} />
                  </div>
                  <h3>{feature.name}</h3>
                </dt>
                <dd className="mt-2 text-base leading-7">
                  <p>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
