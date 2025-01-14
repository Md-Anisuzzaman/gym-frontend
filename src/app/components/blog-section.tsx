
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "10 Tips for Effective Workouts",
    description: "Maximize your gym time with these expert tips.",
    date: "2023-06-01",
    readTime: "5 min read"
  },
  {
    title: "Nutrition Basics for Muscle Gain",
    description: "Learn what to eat to support your muscle growth.",
    date: "2023-05-25",
    readTime: "7 min read"
  },
  {
    title: "The Importance of Rest Days",
    description: "Why taking breaks is crucial for your fitness journey.",
    date: "2023-05-18",
    readTime: "4 min read"
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Published on {post.date} • {post.readTime}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="#">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="#">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

