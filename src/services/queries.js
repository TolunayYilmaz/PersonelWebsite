import { useQuery } from '@tanstack/react-query';
import { getProfile } from './api';

export function useProfile(id) {
  return useQuery({
    queryKey: ['profile', id], // id'yi queryKey'e dahil ederek her bir id için ayrı veri çekebilirsiniz
    queryFn: () => getProfile(id), // id'yi getProfile fonksiyonuna parametre olarak iletmek
    staleTime: 20000,
  });
}
