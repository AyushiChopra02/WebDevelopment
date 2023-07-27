// every ka mtlb agr ek b is q mai 75 se niche h to sb k sb false h every
const exams = [80 , 86 , 44 , 88 ,99, 97]
exams.every(score => score >= 75)

// some mtlb age ek b true h na to sb true h lekin every k lie sb true hone chhaiye
exams.some(score => score >= 75)