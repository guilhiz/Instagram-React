import Posts from "./Posts/Posts"
import SideBar from "./SideBar"
import Stories from "./Stories/Stories"

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