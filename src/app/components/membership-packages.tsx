import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const packages = [
  {
    name: "Basic",
    price: "$29.99",
    description: "Perfect for beginners",
    features: ["Access to gym equipment", "Locker room access", "1 group class per week"]
  },
  {
    name: "Premium",
    price: "$49.99",
    description: "For dedicated fitness enthusiasts",
    features: ["24/7 gym access", "Unlimited group classes", "1 personal training session per month"]
  },
  {
    name: "Elite",
    price: "$79.99",
    description: "The ultimate fitness experience",
    features: ["24/7 gym access", "Unlimited group classes", "Weekly personal training sessions", "Nutrition consultation"]
  }
]

export function MembershipPackages() {
  return (
    <section id="membership" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Membership Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-4">{pkg.price}<span className="text-sm font-normal">/month</span></p>
                <ul className="list-disc list-inside">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="mb-2">{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

