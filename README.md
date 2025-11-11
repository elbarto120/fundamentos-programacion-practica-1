# Álgebra Lineal — Ejercicios de Matrices  
**Fecha:** 11 de noviembre de 2025  

## 📘 Objetivo de la Documentación  
El objetivo de este documento es **documentar las soluciones y procedimientos** de los ejercicios sobre **clasificación y operaciones con matrices**, aplicando los conocimientos vistos en clase.  
Además, se utiliza el formato **Markdown** para practicar la documentación técnica y la organización de información en un repositorio.

---

## 📂 Ejercicios Realizados

### 🧮 Ejercicio 1: Clasificar matrices

**Enunciado del problema:**  
Identificar el tipo de cada matriz dada:

\[
A = \begin{pmatrix}1 & 0 \\ 0 & 1\end{pmatrix}, \quad
B = \begin{pmatrix}3 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & 5\end{pmatrix}, \quad
C = \begin{pmatrix}2 & 1 & 4 \\ 1 & 3 & 5 \\ 4 & 5 & 6\end{pmatrix}, \quad
D = \begin{pmatrix}1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6\end{pmatrix}
\]

**Solución:**
- **Matriz A:** Matriz identidad (cuadrada, diagonal, simétrica).  
- **Matriz B:** Matriz diagonal (solo tiene valores en la diagonal principal).  
- **Matriz C:** Matriz simétrica (C = Cᵀ).  
- **Matriz D:** Matriz triangular superior (todos los elementos debajo de la diagonal son cero).

**Procedimiento:**
1. Se observa la forma y disposición de los elementos.  
2. Si todos los elementos fuera de la diagonal son cero → matriz diagonal.  
3. Si los valores se reflejan respecto a la diagonal → matriz simétrica.  
4. Si los valores debajo de la diagonal son cero → matriz triangular superior.  
5. Si es diagonal con unos → matriz identidad.

---

### 🔢 Ejercicio 2: Operaciones básicas

**Enunciado del problema:**  
Dadas las matrices:

\[
A = \begin{pmatrix}2 & -1 \\ 3 & 4\end{pmatrix}, \quad
B = \begin{pmatrix}5 & 2 \\ -1 & 3\end{pmatrix}
\]

Calcular:
a) A + B  
b) 2A − B  
c) AB  
d) BA  
e) Aᵀ

---

**Soluciones:**

a) **A + B**

\[
A + B = 
\begin{pmatrix}2+5 & -1+2 \\ 3+(-1) & 4+3\end{pmatrix} =
\begin{pmatrix}7 & 1 \\ 2 & 7\end{pmatrix}
\]

---

b) **2A − B**

\[
2A = \begin{pmatrix}4 & -2 \\ 6 & 8\end{pmatrix}, \quad
2A - B = 
\begin{pmatrix}4-5 & -2-2 \\ 6-(-1) & 8-3\end{pmatrix} =
\begin{pmatrix}-1 & -4 \\ 7 & 5\end{pmatrix}
\]

---

c) **AB**

\[
AB = 
\begin{pmatrix}
2(5) + (-1)(-1) & 2(2) + (-1)(3) \\
3(5) + 4(-1) & 3(2) + 4(3)
\end{pmatrix} =
\begin{pmatrix}
11 & 1 \\ 11 & 18
\end{pmatrix}
\]

---

d) **BA**

\[
BA =
\begin{pmatrix}
5(2) + 2(3) & 5(-1) + 2(4) \\
-1(2) + 3(3) & -1(-1) + 3(4)
\end{pmatrix} =
\begin{pmatrix}
16 & 3 \\ 7 & 13
\end{pmatrix}
\]

---

e) **Aᵀ (Transpuesta de A)**

\[
Aᵀ = 
\begin{pmatrix}
2 & 3 \\ -1 & 4
\end{pmatrix}
\]

---

### 🔗 Ejercicio 3: Multiplicación en cadena

**Enunciado del problema:**  
Verificar que \((AB)C = A(BC)\) con las matrices:

\[
A = \begin{pmatrix}1 & 2 \\ 3 & 4\end{pmatrix}, \quad
B = \begin{pmatrix}2 & 0 \\ 1 & 3\end{pmatrix}, \quad
C = \begin{pmatrix}1 & 1 \\ 0 & 2\end{pmatrix}
\]

---

**Procedimiento paso a paso:**

1. **Calcular AB:**

\[
AB = 
\begin{pmatrix}
1(2) + 2(1) & 1(0) + 2(3) \\
3(2) + 4(1) & 3(0) + 4(3)
\end{pmatrix} =
\begin{pmatrix}
4 & 6 \\ 10 & 12
\end{pmatrix}
\]

2. **Calcular (AB)C:**

\[
(AB)C =
\begin{pmatrix}
4 & 6 \\ 10 & 12
\end{pmatrix}
\begin{pmatrix}
1 & 1 \\ 0 & 2
\end{pmatrix} =
\begin{pmatrix}
4(1)+6(0) & 4(1)+6(2) \\
10(1)+12(0) & 10(1)+12(2)
\end{pmatrix} =
\begin{pmatrix}
4 & 16 \\ 10 & 34
\end{pmatrix}
\]

3. **Calcular BC:**

\[
BC =
\begin{pmatrix}
2 & 0 \\ 1 & 3
\end{pmatrix}
\begin{pmatrix}
1 & 1 \\ 0 & 2
\end{pmatrix} =
\begin{pmatrix}
2(1)+0(0) & 2(1)+0(2) \\
1(1)+3(0) & 1(1)+3(2)
\end{pmatrix} =
\begin{pmatrix}
2 & 2 \\ 1 & 7
\end{pmatrix}
\]

4. **Calcular A(BC):**

\[
A(BC) =
\begin{pmatrix}
1 & 2 \\ 3 & 4
\end{pmatrix}
\begin{pmatrix}
2 & 2 \\ 1 & 7
\end{pmatrix} =
\begin{pmatrix}
1(2)+2(1) & 1(2)+2(7) \\
3(2)+4(1) & 3(2)+4(7)
\end{pmatrix} =
\begin{pmatrix}
4 & 16 \\ 10 & 34
\end{pmatrix}
\]

**Conclusión:**  
\[
(AB)C = A(BC)
\]
✔ Se cumple la **propiedad asociativa** de la multiplicación de matrices.

---

## ✅ Conclusión General

En estos ejercicios se aplicaron los conceptos fundamentales de **clasificación, operaciones y propiedades de las matrices**, verificando que las operaciones cumplen las leyes algebraicas esperadas.  
El uso del formato **Markdown** permitió organizar de forma clara los procedimientos, resultados y fórmulas matemáticas, mejorando la presentación técnica de los cálculos.

---

**Autor:** Gael Magaña Chan  
**Materia:** Álgebra Lineal
