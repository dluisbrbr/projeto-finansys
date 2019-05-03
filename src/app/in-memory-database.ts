import { InMemoryDbService } from "angular-in-memory-web-api";
import { CategoriesModule } from './pages/categories/categories.module';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories = [
            { id: 1, name: "Moradia", description: "Pagamentos de contas da casa" },
            { id: 2, name: "Saúde", description: "Planos de saúde e remédios" },
            { id: 3, name: "Lazer", description: "Cinema, parques, praia, etc..." },
            { id: 4, name: "Salário", description: "Recebimento de salário" },
            { id: 5, name: "Freelas", description: "Trabalhos como freelancer" }
        ];

        return { categories }
    }
}