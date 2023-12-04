
import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import DataDisplay from '../components/DataDisplay';
import './ListaPaisesPage.css';

const ListaPaisesPage: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const sortedCountries = data.sort((a, b) => {
          const nameA = a.translations?.spa?.common || '';
          const nameB = b.translations?.spa?.common || '';
          return nameA.localeCompare(nameB);
        });

        setCountries(sortedCountries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => history.back()}>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Países</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-content">
        {countries.map((country, index) => (
          <DataDisplay key={index} data={country} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default ListaPaisesPage;
