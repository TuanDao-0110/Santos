function logAtLeast5(n)
{
  for (let i = 1; i <= Math.max(5, n); i++)
  {    console.log(i);
  }
}
// O()
console.log(logAtLeast5(10))