import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";

export default function TotalStudents() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Total Students</CardDescription>
        <CardTitle className="text-4xl">35</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">15 slots empty</div>
      </CardContent>
      <CardFooter>
        <Progress value={25} aria-label="25% increase" />
      </CardFooter>
    </Card>
  );
}
