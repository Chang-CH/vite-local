import styles from './s.module.scss';
import { services } from './constants';
import TurboCard from './components/TurboCard';

function App() {
  return (
    <div className={styles.bgDot}>
      <h1>Local Services</h1>
      <div className={styles.divSwitch}>
        <p>On LAN:</p>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.serviceContainer}>
        {services.map((service, idx) => {
          return (
            <TurboCard key={idx}>
              <div className={styles.serviceCard}>
                <div
                  style={{
                    width: '10rem',
                    height: '10rem',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginInline: 'auto',
                    padding: '1rem',
                  }}
                >
                  {typeof service.icon === 'string' ? (
                    <img
                      src={service.icon}
                      style={{
                        maxWidth: '8rem',
                        maxHeight: '8rem',
                        width: 'auto',
                        height: 'auto',
                      }}
                    />
                  ) : (
                    <service.icon />
                  )}
                </div>
                <h2>{service.name}</h2>
                <p>{service.desc}</p>
                <p>{service.local}</p>
              </div>
            </TurboCard>
          );
        })}
      </div>
    </div>
  );
}

export default App;
