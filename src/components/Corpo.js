import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"

export default function Corpo() {
return (
  <section>
    <main>
      <Stories />
      <Posts />
    </main>
    <SideBar />
  </section>
)
}