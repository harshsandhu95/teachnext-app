import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";

export default function Credits() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Total Credits</CardDescription>
        <CardTitle className="text-4xl">257</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">16 days to refill</div>
      </CardContent>
      <CardFooter>
        <Progress value={25} aria-label="25% increase" />
      </CardFooter>
    </Card>
  );
}
