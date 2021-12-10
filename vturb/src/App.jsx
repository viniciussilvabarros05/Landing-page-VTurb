import styles from './app.module.scss'
import { Form } from './components/form/form'

function App() {
  return (
    <div className={styles.contentApp}>
      <section>
        <div className={styles.presentation}>
          <h1>
            Learn to code by watching others
          </h1>
          <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
        </div>

        <Form></Form>
      </section>
    </div>
  )
}

export default App
