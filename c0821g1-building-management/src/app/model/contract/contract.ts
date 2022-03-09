import {Customer} from './customer';
import {Employee} from './employee';
import {Spaces} from './spaces';

export interface Contract {
  contractId ?: number;
  contractCode ?: string;
  contractExpred ?: string;
  contractDateStart ?: string;
  contractDateEnd ?: string;
  contractTotal ?: string;
  contractContent ?: string;
  contractDeleteFlag ?: boolean;
  checkFlag ?: number;
  customer ?: Customer;
  employee ?: Employee;
  spaces ?: Spaces;
}
