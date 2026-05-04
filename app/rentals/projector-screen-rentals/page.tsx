import { RentalPageTemplate } from "@/components/rental-page-template"

export const metadata = {
  title: "Projector & Screen Rentals in Los Angeles | Prime Line AV",
  description: "Professional projectors and screens for presentations and events in Los Angeles.",
}

export default function ProjectorScreenRentalsPage() {
  return (
    <RentalPageTemplate
      categoryName="Projector & Screen Rentals"
      headline="Projector & Screen Rentals in Los Angeles"
      subheadline="High-lumen projectors and screens for presentations and events."
      introText="Deliver impactful presentations with our projector and screen rentals in Los Angeles. We offer conference room projectors, large venue projectors up to 20,000 lumens, and screens from tripod to fast-fold in various sizes for corporate events, weddings, and outdoor movies."
      heroImage="/executive-boardroom-presentation-display.jpg"
      packages={[
        {
          title: "Meeting Room Package",
          description: "3,500 lumen projector with tripod screen",
          image: "/meeting-room-av-setup-projector-screen.jpg",
          price: 350,
          features: ["3.5K Lumens", "6 ft Screen", "HDMI"],
        },
        {
          title: "Conference Package",
          description: "5,000 lumen projector with 8 ft screen",
          image: "/conference-room-speakers-microphones.jpg",
          price: 650,
          originalPrice: 800,
          features: ["5K Lumens", "8 ft Screen", "Stand"],
          isPromo: true,
        },
        {
          title: "Large Venue Package",
          description: "10,000 lumen projector with 12 ft screen",
          image: "/conference-stage-av-setup.jpg",
          price: 1500,
          features: ["10K Lumens", "12 ft Screen", "Rigging"],
        },
        {
          title: "Outdoor Movie Package",
          description: "Inflatable screen with projector and audio",
          image: "/outdoor-event-lighting-speakers.jpg",
          price: 1200,
          features: ["20 ft Screen", "Audio", "Setup"],
        },
      ]}
    />
  )
}
