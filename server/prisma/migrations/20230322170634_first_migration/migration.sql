-- CreateTable
CREATE TABLE "Cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ano" INTEGER NOT NULL,
    "marca" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "chassi" TEXT NOT NULL,
    "renavam" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cars_placa_key" ON "Cars"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Cars_chassi_key" ON "Cars"("chassi");

-- CreateIndex
CREATE UNIQUE INDEX "Cars_renavam_key" ON "Cars"("renavam");
