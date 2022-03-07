import {Space} from './space';
import {Customer} from './customer';
import {Employee} from './employee';

export interface Contract {
  contractId ?: number;
  contractExpired ?: string;
  contractDateStart ?: string;
  contractDateEnd ?: string;
  price ?: string;
  contractTotal ?: string;
  contractContent ?: string;
  contractDeposit ?: string;
  contractTaxCode ?: string;
  contractImageUrl?: string;
  contractDeleteFlag ?: boolean;
  employeeId ?: number;
  customerId ?: number;
  spaceId ?: number;
}
