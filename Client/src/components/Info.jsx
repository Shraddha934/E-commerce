import React from "react";
import styles from "./Info.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Info = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className="text-center mb-4">Konkani Wedding Rituals</h1>

      <div className={styles.section}>
        <h2 className="text-primary">Pre-Wedding Rituals</h2>
        <div className={styles.rituals}>
          <h3 className="text-success">Sakhar Puda</h3>
          <p>
            Sakhar Puda ceremony is the initial ritual that takes place in a
            Maharashtrian Konkani wedding. It can also be termed as the
            engagement, wherein the bride is given a sari, gold ornaments and
            sweet or sugar as gift or shagun, by the groom's family.
          </p>

          <h3 className="text-success">Kelvan</h3>
          <p>
            Kelvan is performed at both the bride and the groom's house. It is a
            small puja where offerings and prayers are done to the ancestral
            deity or kuldevta, followed by a meal along with all family members.
          </p>

          <h3 className="text-success">Haldi</h3>
          <p>
            Haldi ceremony takes place wherein turmeric paste is applied to both
            the bride and the groom, known as Halad Chadavane. This is followed
            by Simant puja, where the groom arrives at the bride's place; her
            parents wash his feet and give him gifts or shagun-like clothes,
            fruits, and gold ornaments.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className="text-primary">Wedding Day Rituals</h2>
        <div className={styles.rituals}>
          <h3 className="text-success">Arrival and Antarpat</h3>
          <p>
            The most important day begins when the bride and groom arrive at the
            venue. The maternal uncle of the bride brings her to the wedding
            altar, where the holy mangalashtakas are recited. The bride and
            groom are separated by the Antarpat, a silk shawl, and cannot see
            each other. The shawl is removed, and the couple sees each other for
            the first time and exchanges garlands. At this moment, they are
            showered with unbroken rice.
          </p>

          <h3 className="text-success">Sankalp</h3>
          <p>
            The couple asks their parents for permission to get married and
            takes blessings. This is called the Sankalp ceremony.
          </p>

          <h3 className="text-success">Kanyadaan</h3>
          <p>
            The bride's parents perform Kanyadaan, wherein they give their
            daughter to the groom. After Kanyadaan, the groom ties a black beads
            and gold chain (mangalsutra) around the bride's neck and applies
            sindoor (Vermillion) in her hair parting. She in return applies a
            sandalwood tilak on his forehead.
          </p>

          <h3 className="text-success">Vivah Homa</h3>
          <p>
            Vivah Homa involves lighting the sacred fire. The couple praises
            Agni Dev (the Lord of Fire) to bring the presence of Lord Vishnu
            onto the ceremony, indicating the purity of the rituals performed
            with the help of fire.
          </p>

          <h3 className="text-success">Saptapadi</h3>
          <p>
            Saptapadi ritual requires the couple to take seven rounds around the
            holy fire and take seven vows to support each other in thick and
            thin.
          </p>

          <h3 className="text-success">Karmasamapti</h3>
          <p>
            The wedding ceremony concludes with Karmasamapti, where the bride's
            father, the bride, and the groom please God to bless their wedlock
            and shower happiness upon the couple.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className="text-primary">Post-Wedding Rituals</h2>
        <div className={styles.rituals}>
          <h3 className="text-success">Grihapravesh</h3>
          <p>
            Grihapravesh is the ritual where the bride officially enters her new
            home. The groom's mother and family welcome the couple, wash their
            feet with milk and water, and perform traditional aarti - pooja. The
            bride is asked to enter the house by knocking down a glass of rice
            kept at the entrance. The couple enters the house with their right
            foot, considered auspicious.
          </p>

          <h3 className="text-success">Reception Party</h3>
          <p>
            A reception party is organized to celebrate the wedding, where
            sumptuous food is served for the guests.
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>&copy; 2024 WedBliss. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Info;
