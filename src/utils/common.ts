export const calculateMonthAndYear = () => {
  const joiningDate = new Date(2022, 6) // July 2022 (month is 0-based)
  const today = new Date()

  let years = today.getFullYear() - joiningDate.getFullYear()
  let months = today.getMonth() - joiningDate.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  return { years, months }
}
