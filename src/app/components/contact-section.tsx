
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <Input type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Your Message" />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

