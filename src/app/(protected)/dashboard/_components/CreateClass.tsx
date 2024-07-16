import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default function CreateClass() {
  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>Your Classes</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Manage students based on the classes you create. You can create a new
          class by clicking the button below.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Create New Class</Button>
      </CardFooter>
    </Card>
  );
}
