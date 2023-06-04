import React, { useState } from 'react';
import { TextInputProps, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { Container, Input, Label } from './styles';
import { useTheme } from 'styled-components';

type Props = TextInputProps & {
  label?: string
  datePicker?: boolean
}

export const InputComponent = ({ label, style, datePicker, ...rest }: Props) => {
  const { COLORS } = useTheme()
  const [borderColor, setBorderColor] = useState(COLORS.GRAY_500)
  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)
  const [value, setValue] = useState('')

  const toggleDatePicker = () => {
    if (datePicker) {
      setShowPicker(state => !state)
    }
  }

  const handleChange = ({ type }: DateTimePickerEvent, selectedDate?: Date) => {
    if (type === 'set') {
      const currentDate = selectedDate
      toggleDatePicker()
      setDate(state => currentDate ?? state)
    } else {
      toggleDatePicker()
    }
  }

  return (
    <Container
      style={style}
      onPress={toggleDatePicker}
    >
      <Label>{label}</Label>
      <Input
        style={{ borderColor }}
        {...rest}
        onBlur={() => setBorderColor(COLORS.GRAY_500)}
        onFocus={() => setBorderColor(COLORS.GRAY_300)}
        editable={!datePicker}
        onChangeText={text => setValue(text)}
        value={datePicker ? date.toDateString() : value}
      />
      {(datePicker && showPicker) && <DateTimePicker locale='pt-BR' mode='datetime' display='spinner' value={date} onChange={handleChange} />}
    </Container>
  );
}

