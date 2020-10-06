import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "./date";


export const Sidenav = ({ allPostsData }: { allPostsData: { date: string; title: string; id: string }[] }) => {
  return (
    <nav className={`${utilStyles.sidenav}`}>
      <h2 className={utilStyles.headingLg}>Frisyrer</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/frillor/${id}`}>
              <a>{title}</a>
            </Link>
            <br/>
            <small className={utilStyles.lightText}>
              <Date dateString={date}/>
            </small>
          </li>
        ))}
      </ul>
    </nav>
  );
}