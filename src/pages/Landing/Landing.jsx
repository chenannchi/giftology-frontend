import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.page}>
      <section className={styles.first}>
          <div className={styles.welcome}>
            <div className={styles.statement}>
              Welcome to Giftology,<br />{user ? user.name : 'friend'}!
            </div>
            <div className={styles.favlogo}>
              <img src="/favicon.ico" alt="favicon logo"/>
            </div>
            <div className={styles.introduction}>
              We're here to help you gift in <span>confidence</span>!
            </div>
          </div>
      </section>
      <section className={styles.second}>
        <div className={styles.about}>
          <div className={styles.aboutTitle}>
            <h2>About</h2>
            <img src="./giftology3.png" alt="giftology" id={styles.cursive} />
          </div>
          <p className={styles.text}>Some feel confident when it comes to finding the perfect gift for others, while others do not. We're here to help you gift with <span>ease</span> and feel <span>confident</span> when deciding what gifts to buy. Giftology helps facilitate the communication between gift <span>givers</span> and <span>receivers</span>. You will be able to create your own wishlists as well as view your friends' wishlists to know exactly what they need or want for the next special occasion.</p>
          <img src="./note2.png" alt="company note" id={styles.note} />
        </div>
      </section>
      <footer className={styles.footer} >
        <div>
          © 2022 MadeEZ, Inc.
        </div>
      </footer>
    </main>
  )
}

export default Landing
