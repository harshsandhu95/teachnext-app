import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { DollarSignIcon } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For individuals who want to try out our service.",
      price: 0,
      features: ["5 credits", "Basic support"],
    },
    {
      name: "Pro",
      description: "For small teams who want to get more done.",
      price: 10,
      features: ["50 credits", "Priority support"],
    },
  ];

  return (
    <section id="pricing" className="container py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Affordable pricing with no hidden charges.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plans.map((plan) => (
              <Card key={plan.name}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {plan.price === 0 ? (
                        <span className="text-2xl">Free</span>
                      ) : (
                        <>
                          <DollarSignIcon size={24} />
                          <span className="text-2xl">{plan.price}</span>
                        </>
                      )}
                    </div>

                    <Button>Get Access</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
