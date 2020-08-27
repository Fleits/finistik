import { notification } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';

const baseConfig: {duration: number, placement: NotificationPlacement} = {
  duration: 5,
  placement: 'bottomRight'
}

function success(message: string): void
{
  notification.success({ ...baseConfig, message });
}

function error(message: string): void
{
  notification.error({ ...baseConfig, message });
}

const Notify = { success, error };

export { Notify };