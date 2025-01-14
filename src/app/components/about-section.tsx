
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export function AboutSection() {
  const features = [
    "State-of-the-art equipment",
    "Expert personal trainers",
    "Wide range of group classes",
    "Nutrition counseling",
    "24/7 access",
    "Sauna and spa facilities",
  ]

  return (
    <section id="about" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Power Gym</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Power Gym, we're committed to helping you achieve your fitness goals in a supportive and motivating environment. Our state-of-the-art facilities and expert trainers are here to guide you on your fitness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>Empowering you to reach your full potential</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe that everyone has the power to transform their lives through fitness. Our mission is to provide a welcoming, inclusive environment where members of all fitness levels can thrive, supported by cutting-edge equipment and world-class instruction.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us</CardTitle>
              <CardDescription>Experience the Power difference</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button size="lg">Start Your Journey Today</Button>
        </div>
      </div>
    </section>
  )
}

