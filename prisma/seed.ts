import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando população do banco de dados...');

  // Limpar dados existentes
  console.log('🧹 Limpando dados existentes...');
  await prisma.product.deleteMany();
  await prisma.customer.deleteMany();

  // Criar produtos de exemplo
  console.log('📦 Criando produtos...');
  const products = await prisma.product.createMany({
    data: [
      {
        name: 'Notebook Dell Inspiron 15',
        price: 299900, // R$ 2.999,00 em centavos
        stock: 15
      },
      {
        name: 'Mouse Logitech MX Master 3',
        price: 45900, // R$ 459,00 em centavos
        stock: 50
      },
      {
        name: 'Teclado Mecânico Keychron K2',
        price: 89900, // R$ 899,00 em centavos
        stock: 25
      },
      {
        name: 'Monitor LG UltraWide 29"',
        price: 149900, // R$ 1.499,00 em centavos
        stock: 8
      },
      {
        name: 'Headset HyperX Cloud II',
        price: 39900, // R$ 399,00 em centavos
        stock: 30
      },
      {
        name: 'Webcam Logitech C920',
        price: 49900, // R$ 499,00 em centavos
        stock: 20
      },
      {
        name: 'SSD Samsung 970 EVO 1TB',
        price: 79900, // R$ 799,00 em centavos
        stock: 12
      },
      {
        name: 'Placa de Vídeo RTX 4060',
        price: 249900, // R$ 2.499,00 em centavos
        stock: 5
      },
      {
        name: 'Memória RAM Corsair 16GB DDR4',
        price: 39900, // R$ 399,00 em centavos
        stock: 40
      },
      {
        name: 'Fonte Corsair 650W 80+ Gold',
        price: 59900, // R$ 599,00 em centavos
        stock: 18
      }
    ]
  });

  // Criar clientes de exemplo
  console.log('👥 Criando clientes...');
  const customers = await prisma.customer.createMany({
    data: [
      {
        name: 'João Silva Santos',
        email: 'joao.silva@email.com'
      },
      {
        name: 'Maria Oliveira Costa',
        email: 'maria.oliveira@email.com'
      },
      {
        name: 'Pedro Henrique Almeida',
        email: 'pedro.almeida@email.com'
      },
      {
        name: 'Ana Carolina Ferreira',
        email: 'ana.ferreira@email.com'
      },
      {
        name: 'Carlos Eduardo Souza',
        email: 'carlos.souza@email.com'
      },
      {
        name: 'Fernanda Lima Rodrigues',
        email: 'fernanda.lima@email.com'
      },
      {
        name: 'Rafael Pereira Martins',
        email: 'rafael.martins@email.com'
      },
      {
        name: 'Juliana Santos Barbosa',
        email: 'juliana.barbosa@email.com'
      },
      {
        name: 'Lucas Mendes Carvalho',
        email: 'lucas.carvalho@email.com'
      },
      {
        name: 'Camila Rocha Nascimento',
        email: 'camila.nascimento@email.com'
      },
      {
        name: 'Bruno Costa Ribeiro',
        email: 'bruno.ribeiro@email.com'
      },
      {
        name: 'Larissa Dias Moreira',
        email: 'larissa.moreira@email.com'
      },
      {
        name: 'Thiago Araújo Silva',
        email: 'thiago.araujo@email.com'
      },
      {
        name: 'Gabriela Monteiro Lopes',
        email: 'gabriela.lopes@email.com'
      },
      {
        name: 'Rodrigo Cardoso Freitas',
        email: 'rodrigo.freitas@email.com'
      }
    ]
  });

  console.log(`✅ População concluída!`);
  console.log(`📦 ${products.count} produtos criados`);
  console.log(`👥 ${customers.count} clientes criados`);
}

main()
  .catch((e) => {
    console.error('❌ Erro durante a população do banco:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });