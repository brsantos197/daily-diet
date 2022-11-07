import React from 'react';
import { Header } from '@components/Header';
import { Container, Divider, Meal, MealHour, MealName, Meals, MealsDateText, MealStatus, New } from './styles';
import { Percent } from '@components/Percent';
import { FlatList, Text, View } from 'react-native';
import { Button } from '@components/Button';

export const Home = () => {

  const data = [
    {
      date: '06.11.22',
      meals: [
        { name: 'Hamburguer', hour: '20:00', inDiet: true },
        { name: 'Pizza', hour: '21:00', inDiet: false }
      ]
    },
    {
      date: '07.11.22',
      meals: [
        { name: 'X-Tudo', hour: '12:00', inDiet: false },
        { name: 'Açai', hour: '14:00', inDiet: true },
        { name: 'Salada', hour: '16:00', inDiet: true },
        { name: 'Burrito', hour: '18:00', inDiet: false },
        { name: 'Panqueca', hour: '20:00', inDiet: false },
      ]
    }]

    const totalMeals = data.reduce((totalMeals, date) => {
      totalMeals += date.meals.length
      return totalMeals
    }, 0)

    const totalMealsInDiet = data.reduce((totalMeals, date) => {
      totalMeals += date.meals.filter(meal => meal.inDiet).length
      return totalMeals
    }, 0)

    console.log('totalMeals: ', totalMeals);
    console.log('totalMealsInDiet: ', totalMealsInDiet);
    

  return (
    <Container>
      <Header />
      <Percent type='SECONDARY' />
      <Meals>
        <New>
          <Text style={{ marginBottom: 8 }}>Refeições</Text>
          <Button text='Nova Refeição' icon='add' />
        </New>
        <FlatList
          data={data}
          keyExtractor={item => item.date}
          renderItem={({ item }) => (
            <View>
              <MealsDateText>
                {item.date}
              </MealsDateText>
              <FlatList
                data={item.meals}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                  <Meal>
                    <MealHour>
                      {item.hour}
                    </MealHour>
                    <Divider />
                    <MealName>
                      {item.name}
                    </MealName>
                    <MealStatus inDiet={item.inDiet} />
                  </Meal>
                )}
              />
            </View>
          )}
        />
      </Meals>
    </Container>
  );
}
