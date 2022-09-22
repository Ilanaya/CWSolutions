n = int(input('Print smth: '))
matrix = [0] * n
for i in range(n):
    matrix[i] = [0] * n

x, y = 0, 0
delta_x, delta_y = 1, 0
for k in range(n**2):
    matrix[y][x] = k + 1
    next_val = x + delta_x if delta_x else y + delta_y
    if (next_val == n or matrix[y+delta_y][x+delta_x] != 0):
        delta_x, delta_y = -delta_y, delta_x
    x += delta_x
    y += delta_y

for j in range(n):
    print(matrix[j])
