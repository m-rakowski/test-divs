# Bug:

1. Scroll down
2. Pick favorite dog

actual:
white page

expected:
nothing

# Fix:

add {position: relative} to React Aria's RadioGroup to fix https://github.com/adobe/react-spectrum/issues/5094
