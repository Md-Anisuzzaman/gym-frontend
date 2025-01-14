
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const transformations = [
  {
    name: "John Doe",
    description: "Lost 30 lbs in 3 months",
    beforeImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL2hpcHBvdW5pY29ybl9waG90b19vZl9hX2ZhdF9tYW5fd2VhcmluZ193aGl0ZV90YW5rX3RvcF9zaGlydHBsdV8wMzU5YzA0MC1mYmE3LTQ5ZmUtYTQzZS04MmZhMGFiZmQ0N2ZfMS5qcGc.jpg",
    afterImage: "https://r2-us-west.photoai.com/1714378572-761e41552466922bb08aaabeb46ae694-13.png",
    testimonial: "Power Gym changed my life. The trainers and community support made all the difference in my fitness journey."
  },
  {
    name: "Jane Smith",
    description: "Gained 15 lbs of muscle in 6 months",
    beforeImage: "https://imgcdn.stablediffusionweb.com/2024/9/17/2d3ba2c3-4eb8-4abe-9443-37de99c8581d.jpg",
    afterImage: "https://thumbs.dreamstime.com/b/healthy-body-4000017.jpg",
    testimonial: "I never thought I could achieve such results. The personalized training program at Power Gym was exactly what I needed."
  }
]

export function TransformationSection() {
  return (
    <section id="transformations" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Incredible Transformations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the amazing results our members have achieved with dedication and our expert guidance. Your transformation story could be next!
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {transformations.map((transformation, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle>{transformation.name}</CardTitle>
                <CardDescription className="text-primary-foreground/80">{transformation.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <Image
                      src={transformation.beforeImage}
                      alt={`${transformation.name} before`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-background/80 text-foreground px-2 py-1 rounded">Before</div>
                  </div>
                  <div className="relative">
                    <Image
                      src={transformation.afterImage}
                      alt={`${transformation.name} after`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-background/80 text-foreground px-2 py-1 rounded">After</div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground italic">"{transformation.testimonial}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">
            Start Your Transformation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

