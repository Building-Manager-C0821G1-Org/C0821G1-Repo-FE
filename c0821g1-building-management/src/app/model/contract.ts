import {Space} from './space';
import {Customer} from './customer';
import {Employee} from './employee';

export interface Contract {
  contractId ?: number;
  contractCode ?: string;
  contractExpired ?: number;
  contractDateStart ?: Date;
  contractDateEnd ?: Date;
  price ?: number;
  contractTotal ?: number;
  contractContent ?: string;
  contractDeposit ?: number;
  contractTaxCode ?: string;
  contractImageUrl?: string;
  contractDeleteFlag ?: boolean;
  employeeId ?: number;
  customerId ?: number;
  spaceId ?: number;


}
