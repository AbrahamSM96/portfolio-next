import styles from "./Homepage.module.css";

export default function LastVisitHome({ dataCountry }) {
  const { city, country, flag } = dataCountry ?? {
    city: "",
    country: "",
    flag: "",
  };

  return (
    <div className={styles._lastvisit}>
      <span>{city}</span>
      <span>{country}</span>
      <span>{flag}</span>
    </div>
  );
}
